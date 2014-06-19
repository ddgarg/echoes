define(["jquery","underscore","backbone","text!templates/youtube_user_playlist_item.html"],function(t,e,i,l){var s=i.View.extend({tagName:"li",className:"user-playlist",template:e.template(l),events:{"click a":"onPlaylistSelected"},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){var t={id:this.model.id,title:this.model.attributes.snippet.title,size:this.model.attributes.contentDetails.itemCount};return this.$el.html(this.template(t)),this},onPlaylistSelected:function(){this.trigger("playlist-selected",this.model.toJSON()),this.$el.addClass("active")}});return s});