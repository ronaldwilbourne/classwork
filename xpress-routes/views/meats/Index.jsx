const React = require('react')

class Index extends React.Component{
    render() {


        const fruits = this.props.fruits//can be written as const {fruits} = this.props we call it obeject distucturing

        //console.log(this.props)
        // const fruits = this.props.fruits

        // map method
        /*
            - loops over data
            - manipulates data at each index
            - returns new array with new data
        */

        /*
            [
                { name: 'Pear' ... },
                { name: 'Banana' ... },
                { name: 'Apple' ...}
            ]
        */ 
            // After we map over it
             /*
            [element, element, element]
        */

        return (
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                {fruit.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


 module.exports = Index;