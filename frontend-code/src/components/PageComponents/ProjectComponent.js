import React from "react";
import ProjectDetails from "../RenderingComponents/ProjectDetails";

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        let value = 1;
        if (typeof this.props.match.params !== "undefined") {
            value = this.props.match.params.id;
        }
        this.state = {
            id: value,
        };
    }

    render() {
        return <ProjectDetails id={this.state.id} />;
    }
}
export default ProjectComponent;
