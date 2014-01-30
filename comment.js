/**
 * Comment object for comments made on blog entrys.
 *
 * @author James C. Porcelli
 */

/**
 * Construct a new comment
 *
 * @param userName - The comment author.
 * @param comment - The comment text it self.
 * @param response - JSON response from the server.
 */
function Comment(userName, comment, response) {

	this.months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	this.userName = userName;
	this.commentText = comment;
	
	/**
	 * Add the comment to the comment list.
	 * 
	 * @param commentList - The DOM element for the comment list.
	 */
	this.addToList = function(commentList) {

		var commentBlock = document.createElement('div');
		commentBlock.classList.add('Comment');

		var content = document.createElement('div');
		content.classList.add('Content');

		var author = document.createElement('span');
		author.classList.add('CommentAuthor');
		author.textContent = this.userName;

		var text = document.createElement('span');
		text.classList.add('CommentText');
		text.textContent = this.commentText;

		content.appendChild(author);
		content.appendChild(text);

		commentBlock.appendChild(content);

		var footer = document.createElement('div');
		footer.classList.add('CommentFooter');

		var timeStamp = document.createElement('span');
		timeStamp.classList.add('CommentTimeStamp');
		var date = new Date();
		timeStamp.textContent = ' ' + this.months[date.getMonth()] + '. ' + date.getDate() + ', ' + date.getFullYear();

		footer.appendChild(timeStamp);

		commentBlock.appendChild(footer);

		//Append the new comment to the comment list
		commentList.appendChild(commentBlock);
	};

}
