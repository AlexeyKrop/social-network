import React, {ChangeEvent} from 'react';


type ProfileStatusPropsType = {
  status: string
  updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status,
  }


  onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
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
    this.props.updateProfileStatus(this.props.status)
  }


  render() {
    return (
      <>
        <div>

          {!this.state.editMode ? <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span> :
            <input autoFocus onBlur={this.deActiveEditMode.bind(this)} onChange={this.onchangeHandler}
                   type="text"
                   value={this.state.status}/>}
        </div>
      </>
    )
  }
}

export default ProfileStatus;