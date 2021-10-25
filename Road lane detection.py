import matplotlib.pyplot as plt
import numpy as np
import cv2

# The matplotlib actually works in images in the form of matrices...
# we can see in the graph, the x axis from top to bottom as 0 to x values.

# masking all irrelevent stuff...
def roi(img,vertices):
    mask = np.zeros_like(img)
    # channel_count = img.shape[2]
    match_mask_color = 255
    cv2.fillPoly(mask,vertices,match_mask_color)
    masked_image = cv2.bitwise_and(img,mask)
    return masked_image

def draw_lines(img,lines):
    img = np.copy(img)
    blank_image = np.zeros((img.shape[0],img.shape[1],3),dtype=np.uint8)

    for line in lines:
        for x1,y1,x2,y2 in line:
            cv2.line(blank_image,(x1,y1),(x2,y2),(0,0,255),thickness=3)
    img = cv2.addWeighted(img,0.8,blank_image,1,0.0)
    # addWeighted is used to merge 2 images with weights.
    return img

image = cv2.imread('road.jpg')
image = cv2.cvtColor(image,cv2.COLOR_BGR2RGB)

# to focus on the region of interest(ROI) we mask the irrelevent data in the image
print(image.shape)
height = image.shape[0]
width = image.shape[1]

roi_vertices = [
    (0,height),
    (531,441), #visualised and taken from image.
    (width,height)
]

gray_image = cv2.cvtColor(image,cv2.COLOR_RGB2GRAY)
canny_image = cv2.Canny(gray_image,100,200)

cropped_image = roi(canny_image,
                    np.array([roi_vertices],np.int32))
# using the edge detection here, after ROI results in the...
# ROI inclusion to the edge output, So edge detection is done prior.

lines = cv2.HoughLinesP(cropped_image,rho=6,theta=np.pi/60,
                        threshold=160,lines=np.array([]),
                        minLineLength=40,maxLineGap=25)

image_with_lines = draw_lines(image,lines)

title = ['Original','ROI image','canny Image','Road lane track']
images = [image,cropped_image,canny_image,image_with_lines]
for i in range(4):
    plt.subplot(2,2,i+1),plt.imshow(images[i],'gray')
    plt.title(title[i])


plt.show()

