define(["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({el:"#sidebar-menu-toggler",events:{"click a":"onSidebarToggle"},initialize:function(){e(".sidebar-backdrop").on("click",this.onSidebarToggle.bind(this))},onSidebarToggle:function(t){t.preventDefault(),this.$el.toggleClass("opened"),e("#sidebar").toggleClass("closed")}});return{create:function(e){return new r({model:e})}}});