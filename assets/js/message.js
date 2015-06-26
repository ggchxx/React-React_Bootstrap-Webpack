var React=require('react');

var message=React.createClass({
				getInitialState:function(){
						return {
							clickCount:0,
						}
					},
				handlerClick:function(){
					this.setState({
						clickCount:this.state.clickCount+1,
					})
				},
				render:function(){
					
					return (
						<div>11111
						<h2>ClickButton</h2>
						<button onClick={this.handlerClick}>Click Me</button>
						<p>一共单击了{this.state.clickCount}次</p>
						</div>
						)

				}
			});
module.exports=message;