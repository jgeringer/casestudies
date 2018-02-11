import $ from 'jquery'
import 'slick-carousel'

function card() {
    console.log('card me');

    $('.card').on('click', function(e){
        console.log('clicked')
        let $this = $(this)

        let cardCloneX = $this.position().left
        let cardCloneY = $this.position().top
        let cardCloneW = $this.outerWidth()
        let cardCloneH = $this.outerHeight()

        let cardClone = $this.clone().insertAfter($this)
        
        console.log('cardCloneX:', cardCloneX)

        cardClone.css({
            top: cardCloneY + 'px',
            left: cardCloneX + 'px',
            width: cardCloneW + 'px',
            height: cardCloneH + 'px'
        })

        setTimeout(function(){
            cardClone.addClass('card--active')
            let $close = $('<div class="btn-close"><svg class="icon icon-cross"><use xlink:href="#icon-cross"></use></svg></div>')
            $close.prependTo(cardClone)

            //after the animation is done, then add the slider
            if (!!cardClone.find('.single-item').length) {
                setTimeout(function(){
                    cardClone.addClass('slider-ready')
                    cardClone.find('.single-item').slick({
                        dots: true
                    });
                }, 1000)
            } else if(!!cardClone.find('video').length){
                setTimeout(function(){
                    let vid = cardClone.find('video')[0]
                    vid.play()
                }, 500)
            } else if(!!cardClone.find('iframe').length){
                console.log('iframe')
            } 

        },2)
        
    })


    $(document).on('click', '.card .btn-close', function(e){
        let $this = $(this)
        let $card = $this.parent()
        $this.remove()

        console.warn($card.find('.single-item').slick('slickCurrentSlide'))

        let timer = ($card.find('.single-item').slick('slickCurrentSlide') === 0 ? 0 : 500) 

        $card.find('.single-item').slick('slickGoTo', 0)

        setTimeout(function(){
            $card.removeClass('card--active')
            $card.removeClass('slider-ready')
            $card.find('.single-item').slick('unslick');
            $card.addClass('u-visible')
            
            setTimeout(function(){
                $card.remove();
            },1000);
        }, timer)       
        
    });

        

  }
  
  export default card;
  