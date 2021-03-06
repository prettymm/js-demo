
'use strict';
var Popup;
Popup = function(){
    this.el = {
        bodyEle:$("body"),
        popupWrap:$(".js-popup-wrap"),
        popupBg:$(".popup-bg"),
        popupContent:$(".popup-content"),
        popupClose:$(".popup-close")
    };

    this.sel = {
        popupWrapItem:".popup-wrap--item",
        img:[
            "item-1.jpg",
            "item-2.jpg",
            "item-3.jpg",
            "item-4.jpg",
            "item-5.jpg",
            "item-6.jpg",
            "item-7.jpg",
            "item-8.jpg",
            "item-9.jpg"
        ]
    };

    this.init();
};

Popup.prototype.init = function(){
    this.events();
    this.appendHtml();
};

Popup.prototype.events = function(){
    this.imgClick();
    this.closePopup();
    this.closePopupAgain();
};

Popup.prototype.appendHtml = function(){
    var html = '';
    for(var i=0; i<9; i++){
        html += '<div class="popup-wrap--item"><img src="'+ this.sel.img[i] +'" alt=""></div>';
    }
    this.el.popupWrap.append(html);
};

Popup.prototype.imgClick = function(){
    var _this = this;
    this.el.popupWrap.on("click",function(e){
        var target = $(e.target);
        var imgItem = target.closest(_this.sel.popupWrapItem);
        var imgSrc = imgItem.find('img').attr("src");
        if (imgItem.length){
            _this.el.popupBg.show();
            _this.el.popupContent.show();
            _this.el.popupContent.find('img').attr("src", imgSrc);

        }
    });
};

Popup.prototype.closePopup = function(){
    var _this = this;
    this.el.popupClose.on("click", function(){
        _this.el.popupBg.hide();
        _this.el.popupContent.hide();
    });
};

Popup.prototype.closePopupAgain = function(){
    var _this = this;
    if(this.el.popupContent.length){
        this.el.bodyEle.on("click", function(e){
            var target = $(e.target);
            var parent = target.closest(_this.el.popupBg);
            var imgPop = target.closest(_this.el.popupContent);
            if(parent.length){
                if(!imgPop.length){
                    _this.el.popupClose.trigger('click');
                }
            }
        }) 
    }
    
};


new Popup(); 