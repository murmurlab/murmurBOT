cremap=(x,y)=>{
    map=[]
    for(let yf=0;yf<y;yf++){
        map[yf]=[]
      for(let xf=0;xf<x;xf++){
        map[yf].push([0,false])
      }

    }
    map.push(
        //colors
        {
            
        },
        //info
        {
          colours:0,
          coloursq:{
            
          },
          zone:{
            xmin:0,
            xmax:10,
            ymin:0,
            ymax:10
          }
        }
    )
  }
  cremap(10,10)