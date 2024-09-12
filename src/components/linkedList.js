const Linkedlistpractice =()=>{
    class ListNode{
        constructor(data){
            this.data=data;
            this.next=null
        }
    }
    class LinkedList{
        constructor(head=null){
            this.head= head;
        }
    }
    let node1=new ListNode(2);
    let node2=new ListNode(3);
    let node3= new ListNode(4);
    node1.next=node2;
    node2.next=node3;
    let list= new LinkedList(node1);
    // console.log(list.head.data);
    //to get the last node
    const lastData=(list)=>{
        if(!list){
            return null
        }
        let current= list.head;
        while(current.next!==null){
            current=current.next
        }
        return current
    }
    console.log(lastData(list).data,"last node data");
    //to get the size of linked list
    const ListSize=(list)=>{
        let count= 0;
        let node= list.head
        while(node!==null){
            count++;
            node = node.next;
        }
        return count
    }
    console.log(ListSize(list),"size")
    //To add a node to linked list at first
    const AddNodeAtFirst=(list,nodeData)=>{
        var addingNode=new ListNode(nodeData);
        var tempHead=list.head;
        list.head=addingNode;
        list.head.next=tempHead;
        return list
    }
    console.log(AddNodeAtFirst(list,5),"new linked list node added at first");
    //To add a node to linked list at last
    const AddNodeAtLast=(list, nodeData)=>{
        var addingNode= new ListNode(nodeData);
        var temp=list.head;
        while(temp.next !==null){
            temp=temp.next
        }
        temp.next=addingNode;
        return list
    }
    console.log(AddNodeAtLast(list,8),"new linked list node added at last")
    //To add node at pirticular place in linked list
    const AddNodeAtParticular=(list,nodeData,index)=>{
        var addingNode=new ListNode(nodeData);
        if(!list){
            return null
        }
        if(ListSize(list)-1 <index){
            return console.log("given index not found");
        }
        if(index==0){
            AddNodeAtFirst(list,nodeData);
            return list
        }
        var temp=list.head
        for(let i=1;i<index;i++){
            temp=temp.next;
        }
        var extemp=temp.next
        addingNode.next=extemp
        temp.next=addingNode
        return list
    }
    console.log(AddNodeAtParticular(list,10,2),"linked list after adding node at pirticular index")
    // To remove a node from linked list at first
    const RemoveNodeAtFirst=(list)=>{
        var temp=list.head;
        // list.head=null;
        console.log(list,"ksdj");
        list.head=temp.next;
        temp.next = null;
        return list
    }
    console.log(RemoveNodeAtFirst(list),"Linked list after removing node at start")
    return (
        <h1>see the console man</h1>
    )
}
export default Linkedlistpractice