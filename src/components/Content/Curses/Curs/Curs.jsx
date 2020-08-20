import React, {useLayoutEffect} from "react";
import Style from "./Curs.module.css"
import {NavLink} from "react-router-dom";
import 'draft-js/dist/Draft.css';



export default function Curs() {
    return (
        <div>
            <div>
                <NavLink to='/prev' className={Style.NavBtnPrev}>Prev</NavLink>
                <NavLink to='/next' className={Style.NavBtnNext}>Next</NavLink>
            </div>
        </div>
    )
}

/*export default class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
    }

    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}*/

