(function(){(function(a){a.countdown=function(c,e){var d,b=this;this.el=c;this.$el=a(c);this.$el.data("countdown",this);this.init=function(){b.options=a.extend({},a.countdown.defaultOptions,e);if(b.options.refresh){b.interval=setInterval(function(){return b.render()},b.options.refresh)}b.render();return b};d=function(h){var f,g;h=Date.parse(a.isPlainObject(b.options.date)?b.options.date:new Date(b.options.date));g=(h-Date.parse(new Date))/1000;if(g<=0){g=0;if(b.interval){b.stop()}b.options.onEnd.apply(b)}f={years:0,days:0,hours:0,min:0,sec:0,millisec:0};if(g>=(365.25*86400)){f.years=Math.floor(g/(365.25*86400));g-=f.years*365.25*86400}if(g>=86400){f.days=Math.floor(g/86400);g-=f.days*86400}if(g>=3600){f.hours=Math.floor(g/3600);g-=f.hours*3600}if(g>=60){f.min=Math.floor(g/60);g-=f.min*60}f.sec=g;return f};this.leadingZeros=function(g,f){if(f==null){f=2}g=String(g);while(g.length<f){g="0"+g}return g};this.update=function(f){b.options.date=f;return b};this.render=function(){b.options.render.apply(b,[d(b.options.date)]);return b};this.stop=function(){if(b.interval){clearInterval(b.interval)}b.interval=null;return b};this.start=function(f){if(f==null){f=b.options.refresh||a.countdown.defaultOptions.refresh}if(b.interval){clearInterval(b.interval)}b.render();b.options.refresh=f;b.interval=setInterval(function(){return b.render()},b.options.refresh);return b};return this.init()};a.countdown.defaultOptions={date:"June 7, 2087 15:03:25",refresh:1000,onEnd:a.noop,render:function(b){return a(this.el).html(""+b.years+" years, "+b.days+" days, "+(this.leadingZeros(b.hours))+" hours, "+(this.leadingZeros(b.min))+" min and "+(this.leadingZeros(b.sec))+" sec")}};a.fn.countdown=function(b){return a.each(this,function(e,d){var c;c=a(d);if(!c.data("countdown")){return c.data("countdown",new a.countdown(d,b))}})};return void 0})(jQuery)}).call(this);