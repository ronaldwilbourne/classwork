const React = require('react')
const meat = require('../../models/meat')

//class component
 class Show extends React.Component {
    render() {
        const meat = this.props.meat

        return(
            <div>
            <h1>Show page</h1>
            <p>
                The {meat.name} is {meat.color}
            </p>
            <p>
            <nav>
                {}
            </nav>

            </p>
            </div>
        )
    }
 }
  
 module.exports = Show