defineNextRowLength = (nextRow = 0) => {
  const rowCount = this.props.children.length;
  const { currentRow = 0 } = this.state;
  const { children = [] } = this.props;

  switch (nextRow) {
    case 1:
      if (currentRow < rowCount - 1) {
        return children[currentRow + nextRow].props.children.length;
      }
      break;
    case -1:
      if (currentRow > 0) {
        return children[currentRow + nextRow].props.children.length;
      }
      break;
    default:
      return children[currentRow].props.children.length;
  }
};
