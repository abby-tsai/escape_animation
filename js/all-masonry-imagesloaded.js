
const imageList = [
  '1 - ArsdCGv.jpg',
  '2 - LNUXzZF.jpg',
  '3 - kgTEVHZ.jpg',
  '4 - vZoqs0P.jpg',
  '5 - SEu9pHo.jpg',
  '6 - OkKwWM9.jpg',
  '7 - eUppgFB.jpg',
  '8 - WAIXTXs.jpg',
  '9 - vb0uajo.jpg',
  '10 - s6w2RpD.jpg',
];


const pictureLists = document.querySelector(".picture-lists");

imageList.forEach(item => {
  // 先製作圖片的外層div標籤
  const imgDiv = document.createElement('div');
  imgDiv.classList = 'grid-item opacity-0';

  // 加入img標籤，並加上src路徑
  imgDiv.innerHTML = `<img src='image/${item}' alt=''>`;

  // 渲染到 pictureLists，注意要用 append，不可以用innerHTML
  pictureLists.append(imgDiv);

  // 渲染完後，找到所有有 grid-item class 的標籤
  const gridItem = document.querySelectorAll('.grid-item');
  // 執行以下function
  show(gridItem);
});

// 使用 setTimeout 讓圖片依照順序呈現
function show(gItem) {
  gItem.forEach((item, id) => {
    setTimeout(() => {
      console.log(item);
      item.classList = 'grid-item opacity-100 transform-1 animate__animated animate__bounceIn'
    }, id * 750)
  })
}

// grid 套間的設定
$(".grid").imagesLoaded(
  {
    background: ".lazyload"
  },
  function () {
    const $grid = $(".grid").masonry({
      // 選擇要排列的子元素
      itemSelector: ".grid-item",
      // 子元素寬度，RWD 可以設定子元素 .grid-item 選擇器名稱
      columnWidth: ".grid-item",
      // RWD 百分比設定選項
      percentPosition: true,
      // 子元素轉場持續時間,預設'0.4s'
      transitionDuration: "0.5s",
      // 子元素轉場錯開時間，單位毫秒
      stagger: 0,
      isAnimated: true,
      gutter: 10
    });
  });

