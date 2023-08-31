<template>
    <div class="flex flex-col justify-center w-[100%] h-[100vh]" style="background: #efb529;">
        <div class="container m-auto">
            <div class="content">
                <div class="content__container w-[100%]">
                    <ul class="content__container__list">
                        <li class="content__container__list__item">Insight</li>
                        <li class="content__container__list__item">Inspect</li>
                        <li class="content__container__list__item">Analyze</li>
                        <li class="content__container__list__item">Visualize</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
  width: 400px;
  height: 50px;
}

.content {
  display: block;
  position: sticky;
  overflow: hidden;
  font-family: 'Lato', sans-serif;
  font-size: 70px;
  line-height: 80px;
  color: #ecf0f1;
}

.content__container {
  font-weight: 600;
  overflow: hidden;
  height: 80px;
  padding: 0 60px;
}

.content__container:before {
  content: '[';
  left: 0;
}

.content__container:after {
  content: ']';
  position: absolute;
  right: 0;
}

.content__container:after, .content__container:before {
  position: absolute;
  top: -4px;
  color: #16a085;
  font-size: 70px;
  line-height: 70px;
  -webkit-animation-name: opacity;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-name: opacity;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.content__container__list {
  margin-top: 0;
  text-align: left;
  list-style: none;
  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

.content__container__list__item {
  line-height: 80px;
  width: 100%;
}

@keyframes opacity {
  0%, 100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

@keyframes change {
  0%, 12.66%, 100% {
    transform: translate3d(0, 0, 0);
  }

  16.66%, 29.32% {
    transform: translate3d(0, -25%, 0);
  }

  33.32%, 45.98% {
    transform: translate3d(0, -50%, 0);
  }

  49.98%, 62.64% {
    transform: translate3d(0, -75%, 0);
  }

  66.64%, 79.3% {
    transform: translate3d(0, -50%, 0);
  }

  83.3%, 95.96% {
    transform: translate3d(0, -25%, 0);
  }
}
</style>