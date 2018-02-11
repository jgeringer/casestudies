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
            let $close = $('<button class="btn-close">CLOSE</button>')
            $close.prependTo(cardClone)
        },2)
        
    })


    $(document).on('click', '.card .btn-close', function(e){
        let $this = $(this)
        let $card = $this.parent()
        $this.remove()

        $card.removeClass('card--active')
        $card.addClass('u-visible')
        
        setTimeout(function(){
            $card.remove();
        },1000);
        
    });


  }
  
  export default card;
  