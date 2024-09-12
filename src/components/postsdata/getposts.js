export async function getPostIdList() {
  const response=await fetch('https://fakestoreapi.com/products')
  const ids=await response.json();
  var idss=[]
  for(let i=1;i<=ids.length;i++){
    idss.push({params:{id:i.toString()}})
  }
  return idss
  }
  

export async function getPostDetails(postId) {
    const dataSet = {
      '1': {
        title: 'Post 1',
        description: 'Lorem ipsum dolor sit amet...',
        date: 'Oct 10, 2022'
      },
      '2': {
        title: 'Post 2',
        description: 'Lorem ipsum dolor sit amet...',
        date: 'Oct 20, 2022'
      },
      '3': {
        title: 'Post 3',
        description: 'Lorem ipsum dolor sit amet...',
        date: 'Oct 30, 2022'
      }
    }
    return dataSet[postId]
  }