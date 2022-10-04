const React = require('react')

//class component
 class Show extends React.Component {
    render() {
        const fruit = this.props.fruit

        return(
            <div>
            <h1>Show page</h1>
            <p>
                The {fruit.name} is {fruit.color}
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