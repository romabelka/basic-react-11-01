export default class Toggler {
    state = {
        activeId: null
    }

    toggleActive = (activeId) => this.setState({ activeId })
}