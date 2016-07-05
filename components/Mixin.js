var BindingMixin = {
	handleChange:function(key){
		var that = this;
		return function(event){
			var newState = {};
			newState[key] = event.target.value;
			that.setState(newState);
		}
	}
}


var BindingExample = React.createClass({
	mixins:[BindingMixin],
	getInitState:function(){
		return {
			text: "", 
		}
	},
	render:function(){
		return (
			<div>
				<input type="text" placeholder="input text" 
				onChange={this.handleChange('text')}
				/>
				<p>{this.state.text}</p>
			</div>
		);
	}
});