import React from 'react';

type ProfileStatusPropsType = {
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    editMode: false
  }

  activeEditMode() {
    this.setState({
      editMode: true
    })
  }

  deActiveEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <>
        <div>

          {!this.state.editMode ? <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span> :
            <input autoFocus onBlur={this.deActiveEditMode.bind(this)} onChange={() => {
            }} type="text" value={this.props.status}/>}
        </div>
      </>
    )
  }
}

export default ProfileStatus;