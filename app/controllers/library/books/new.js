import Controller from '@ember/controller';

export default Controller.extend({
	//firebaseApp: Ember.inject.service(),
	actions: {
		addBook: function(){
			//var storageRef = window.firebase.storage().ref();
			var title = this.get('title');
			var author = this.get('author');
			var publication = this.get('publication');
			var yop= this.get('yop');
			var path=this.get('image');
			var bookid=this.get('bookid');
			var description=this.get('description');
			//var mountainsRef = storageRef.child(path);
			//var date = this.get('date');
			
			//Create New Task
			var newBook = this.store.createRecord('book', {
			  id: bookid,
			  title: title,
			  author: author,
			  publication: publication,
			  yop: yop,
			  bookimgurl:path,
			  description: description
			});
			newBook.save();
			/*
			mountainsRef.put(path).then(function(snapshot) {
			  console.log('Uploaded a blob or file!');
			});
			*/
			// Clear Form
			
			this.setProperties({
				title: '',
				description: '',
				date: ''
			});
			
		}
	}
});
/*
function showtt(imageid){
var storageRef = firebase.storage().ref();
	imageid+=".jpg";
         var spaceRef = storageRef.child(imageid);
         storageRef.child(imageid).getDownloadURL().then(function(url) {
             var test = url;
             if(blah%2==0){
			document.getElementById('tt').setAttribute("class","d-block w-100");
             document.querySelector('img').src = test;
             blah++;
         }
         else{
         				document.getElementById('tt').setAttribute("class","d-none");
         				blah++;
         }

         }).catch(function(error) {

         });
}
*/