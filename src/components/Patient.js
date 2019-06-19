import React, { Component } from 'react'

export default class Patient extends Component {

    state = {
        givenName: this.props.patientInfo.identifier.name.given,
        familyName: this.props.patientInfo.identifier.name.family,
        orgName: this.props.patientInfo.identifier.managingOrganization.display,
        gender: this.props.patientInfo.identifier.gender,
        conditions: this.props.patientInfo.identifier.conditions
    }

    render() {
        return (
            <div className="patient">
                {<p>Name of patient: {this.state.givenName} {this.state.familyName}</p>}
                {<p>Organization name: {this.state.orgName}</p>}
                {<p>Gender: {this.state.gender}</p>}
                {<p>Number of conditions: {this.state.conditions.length}</p>}
                {<p>List of all conditions:</p>}
                {this.state.conditions.length !== 0 && <ul>
                    {this.state.conditions.map(function(condition){
                        return <li>{condition}</li>
                    })}
                </ul>}
            </div>
        )
    }
}
