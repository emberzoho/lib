import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
	//this.transitionTo('login');
		var user = firebase.auth().currentUser;
		if(!user){
			this.transitionTo('login');
		}
	},
	model(){
		return this.store.findRecord('user', firebase.auth().currentUser.uid);  // => GET /blog-posts/1
  //.then(function(blogPost) {
      // Do something with `blogPost`
  //});
	}
});
