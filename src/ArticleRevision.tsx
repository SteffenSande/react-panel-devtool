import * as React from "react";

export interface IArticleRevisionProps {}

export interface IArticleRevisionState {}

export default class ArticleRevision extends React.Component<
  IArticleRevisionProps,
  IArticleRevisionState
> {
  constructor(props: IArticleRevisionProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <div> noe </div>;
  }
}
