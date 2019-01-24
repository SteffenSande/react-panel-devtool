import * as React from "react";
import "./App.css";
import HeadlineRevision from "./HeadlineRevision";

export interface IAppState {
  title: string;
  author: string;
  published: string;
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      title: "some Title",
      author: "Someone that writes",
      published: "Longer time ago"
    };
  }

  render() {
    return (
      <div className="App">
        <HeadlineRevision
          title={this.state.title}
          author={this.state.author}
          published={this.state.published}
        />
      </div>
    );
  }
}
