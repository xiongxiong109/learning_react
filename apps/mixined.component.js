import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Mixin from '../mixins/com'

const Button = (props) => <button onClick={props.update}>{props.txt}{props.val}</button>
const Label = (props) => <label onMouseMove={props.update}>{props.txt}{props.val}</label>
let ButtonMixined = Mixin(Button)
let LabelMixined = Mixin(Label)

class App extends React.Component {
	render() {
		return (
			<div>
				<ButtonMixined txt="button" />
				<LabelMixined txt="label"/>
			</div>
		)
	}
}

export default App