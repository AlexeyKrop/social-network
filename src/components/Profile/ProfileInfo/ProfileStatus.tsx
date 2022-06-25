import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
  status: string
  updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateProfileStatus(this.state.status)
  }

  onChangeStatus(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.status !== prevProps.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>
        <div>

          {!this.state.editMode ? <span onDoubleClick={this.activeEditMode.bind(this)}>{this.state.status}</span> :
            <input autoFocus onBlur={this.deActiveEditMode.bind(this)} onChange={this.onChangeStatus.bind(this)}
                   type="text"
                   value={this.state.status}/>}
        </div>
      </>
    )
  }
}

export default ProfileStatus;