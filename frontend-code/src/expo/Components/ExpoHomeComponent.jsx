import React from "react";
import disableScroll from "disable-scroll";

import TopNav from "./TopNav";
import Projects from "./Projects";
import SideNav from "./SideNav";

import styles from "../css/app.module.css";
import { constant, sigNames } from "../Assets/constants";
class ExpoHomeComponent extends React.Component {
    componentDidMount() {
        disableScroll.on(
            {},
            {
                authorizedInInputs: [32, 37, 38, 39, 40],
                disableKeys: true,
                disableScroll: false,
                disableWheel: true,
                keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
            }
        );
        this.props.setHeaderFooterStatus(false);
    }
    state = { sig: "catalyst", projectId: 1 };

    handleSigChange = (selectedSig) => {
        this.setState({ sig: selectedSig, projectId: 1 });
    };

    handleProjectChange = (selectedProject) => {
        this.setState({ projectId: selectedProject });
    };

    render() {
        const { projectId, sig } = this.state;
        return (
            <div className={styles.main}>
                <div className={styles.sideContent}>
                    <SideNav
                        handleClick={(project) =>
                            this.handleProjectChange(project)
                        }
                        activeSig={sig}
                        projectId={projectId}
                        data={constant[sig]}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.topNav}>
                        <TopNav
                            sig={sig}
                            handleClick={(sig) => this.handleSigChange(sig)}
                            projectId={projectId}
                            data={sigNames}
                        />
                    </div>
                    <div className={styles.projectContent}>
                        <Projects sig={sig} />
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        disableScroll.off();
        this.props.setHeaderFooterStatus(true);
    }
}
export default ExpoHomeComponent;