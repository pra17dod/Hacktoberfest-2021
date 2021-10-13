//  TIME COMPLEXITY: O(V+E)

/*--   STEPS OF FINDING SCC USING KOSARAJU ALGORITHM  --*/
// 1 -> Do a DFS  on the original graph, keeping track of the finish times of each node. This can be done with a stack.
// 2 -> Reverse the original graph, it can be done efficiently if data structure used to store the graph is an adjacency list.
// 3 -> Do DFS on the reversed graph, with the source vertex as the vertex on top of the stack. When  finishes, all nodes visited 
//        will form one Strongly Connected Component.


#include<bits/stdc++.h>

using namespace std ;
#define pb push_back
#define V 8     // Number of Vertex

const int MAX=1e5 ;
vector<int> g[MAX], grev[MAX] ;  // g[max] represents graph & grev[max] represents graph with reverse edge
bool vis[MAX] ;
stack<int> st ;

void DFS1(int x){
    vis[x]=1 ;
    for(auto i: g[x] ){
        if (!vis[i])
            DFS1(i) ;
    }
    st.push(x) ;
}

void reverse()
{
	for(int i=0;i<V;++i)
	{
		for(int j: g[i])
			grev[j].pb(i);
	}
}

void DFS2(int x){
    cout<<x<<" " ;
    vis[x]=1 ;
    for(auto i: grev[x] ){
        if (!vis[i])
            DFS2(i) ;
    }
}

void findSCC(int n){
    memset(vis,0,sizeof(vis)) ;
    for(int i=0 ; i<n ; i++){
        if (!vis[i])
            DFS1(i) ;
    }
    reverse() ;

    memset(vis,0,sizeof(vis)) ;
    while(!st.empty()){
        int i = st.top() ;
        st.pop() ;
        if (!vis[i]){
            DFS2(i) ;
            cout<<"\n" ;
        }
    }
}

int main(){
