const modalFunc = () => {
   const modal = document.querySelector('.cart-modal__overlay')
const cartBtn = document.querySelector('#cart-button')

const openModal = () => {
   modal.classList.add('open')
}

const closeModal = () => {
   modal.classList.remove('open')
}


cartBtn.addEventListener('click', () => {
   openModal()
})


modal.addEventListener('click', (event) =>{
   if 
   (event.target.classList.contains('cart-modal__overlay') || 
   event.target.closest('.cart-modal__header--close')) {
    closeModal()
   }
})
}

const restsFunc = () => {
   const container = document.querySelector('#rests-container')

   const restArray = [
      {
         id: 0,
         title: 'Пицца плюс',
         time: 50,
         rating: 4.5,
         price: 900,
         type: 'Пицца ',
         image: './img/rests/plus.jpg'
      },
      {
         id: 1,
         title: 'Тануки',
         time: 50,
         rating: 4.5,
         price: 900,
         type: 'Пицца ',
         image: './img/rests/tanuki.jpg'
      },
      {
         id: 2,
         title: 'FoodBand',
         time: 50,
         rating: 4.5,
         price: 900,
         type: 'Пицца ',
         image: './img/rests/foodband.jpg'
      },
      {
         id: 3,
         title: 'Жадина-пицца',
         time: 50,
         rating: 4.5,
         price: 900,
         type: 'Пицца ',
         image: './img/rests/stingy.jpg'
      },
      {
         id: 4,
         title: 'Точка еды',
         time: 50,
         rating: 4.5,
         price: 900,
         type: 'Пицца ',
         image: './img/rests/pointoffood.jpg'
      },
      {
         id: 5,
         title: 'PizzaBurger',
         time: 50,
         rating: 4.5,
         price: 900,
         type: 'Пицца ',
         image: './img/rests/burger.jpg'
      },
   ]

   const loading = () => {
      container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
   }

      const randerRests = (array) => {
         container.innerHTML = ''

         array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
               <a target="_blank" href="./goods.html" class="products-card">
                  <div class="products-card__img">
                     <img src="${card.image}" alt="${card.image}">
                  </div>
                  <div class="products-card__desc">
                     <div class="products-card__desc-row">
                        <h4 class="products-card__desc--title">${card.title}</h4>
                        <div class="products-card__desc--badge">${card.time} мин</div>
                     </div>
                     <div class="products-card__desc-row">
                        <div class="products-card__desc-info">
                        <div class="products-card__desc-info--rating">
                           <img src="./img/icons/star.svg" alt="star">
                           ${card.rating}
                        </div>
                        <div class="products-card__desc-info--price">
                           От ${card.price} ₽
                        </div>
                        <div class="products-card__desc-info--group">
                           ${card.price}
                        </div>
                     </div>
                  </div>
               </div>
               </a>
               `)
         })
      }
  if(container) {
   loading()
   setTimeout(() => {
      randerRests(restArray)
   }, 1000)
  }
}

modalFunc()
restsFunc()

const goodsFunc = () => {
   const container = document.querySelector('#goods-container')

   const goodsArray = [
      {
         id: 0,
         title: 'Ролл угорь стандарт',
         description: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
         price: 250,
         image: './img/goods/image1.jpg',
         buttontext: 'В корзину',
         btnImg:'./img/icons/shopping-cart.svg'
      },
      {
         id: 1,
         title: 'Калифорния лосось стандарт',
         description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори',
         price: 395,
         image: './img/goods/image2.jpg',
         buttontext: 'В корзину',
         btnImg:'./img/icons/shopping-cart.svg'
      },
      {
         id: 2,
         title: 'Окинава стандарт',
         description: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
         price: 250,
         image: './img/goods/image3.jpg',
         buttontext: 'В корзину',
         btnImg:'./img/icons/shopping-cart.svg'
      },
      {
         id: 3,
         title: 'Цезарь маки хl',
         description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
         price: 250,
         image: './img/goods/image4.jpg',
         buttontext: 'В корзину',
         btnImg:'./img/icons/shopping-cart.svg'
      },
      {
         id: 4,
         title: 'Ясай маки стандарт 185 г',
         description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
         price: 250,
         image: './img/goods/image5.jpg',
         buttontext: 'В корзину',
         btnImg:'./img/icons/shopping-cart.svg'
      },
      {
         id: 5,
         title: 'Ролл с креветкой стандарт',
         description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
         price: 250,
         image: './img/goods/image6.jpg',
         buttontext: 'В корзину',
         btnImg:'./img/icons/shopping-cart.svg'
      },
   ]

   const loading = () => {
      container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
   }

   const randerGoods = (array) => {
         container.innerHTML = ''

         array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
               <div class="products-card">
                  <div class="products-card__img">
                     <img src="${card.image}" alt="${card.image}">
                  </div>
                  <div class="products-card__desc">
                     <div class="products-card__desc-row">
                        <h5 class="products-card__desc--name">${card.title}</h5>
                     </div>
                     <div class="products-card__desc-row">
                        <p class="products-card__desc--text">${card.description}.</p>
                     </div>
                     <div class="products-card__desc-row">
                        <div class="products-card__desc-controls">
                           <button class="btn btn-primary">
                           ${card.buttontext}
                              <img src="${card.btnImg}" alt="basket">
                           </button>
                           <span class="products-card__desc-controls--price">${card.price} ₽</span>
                        </div>
                     </div>
                  </div>
               </div>
               `)
         })
      }
      if(container) {
         loading()
         setTimeout(() => {
            randerGoods(goodsArray)
         }, 1000)
        }
}

goodsFunc()