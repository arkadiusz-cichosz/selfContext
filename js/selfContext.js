function Button(text) {
	this.text = text || 'Hello';
	}

Button.prototype = {
	create: function() {
		let self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

const button1 = new Button('Hello'), button2 = new Button('Arkadiusz');
button1.create();
button2.create();