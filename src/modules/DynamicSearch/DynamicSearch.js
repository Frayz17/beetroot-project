import React from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import Block from 'components/Block';

export default class DynamicSearch extends React.Component {
  state = {
    data: ['Mariupol', 'Kiev', 'Los-Angeles', 'Moscow', 'Berdyansk', 'Odessa'],
    findedIndexes: [],
    inputValue: ''
  };

  handleSearch = e => {
    const data = [...this.state.data];
    const targetValue = e.target.value.toLowerCase();

    const findedIndexes = data.filter(item => {
      return item.toLowerCase().indexOf(targetValue) === 0;
    });

    this.setState({
      findedIndexes,
      inputValue: targetValue
    });
  };

  handleFindedDelete = () => {
    this.setState({
      findedIndexes: [],
      inputValue: ''
    });
  };

  dataOutput = data => {
    return data.map((item, i) => <Block key={i}>{item}</Block>);
  };

  render() {
    const { data = [], findedIndexes = [], inputValue = '' } = this.state;
    const { handleSearch, handleFindedDelete, dataOutput } = this;

    const output =
      findedIndexes.length > 0 ? dataOutput(findedIndexes) : dataOutput(data);

    return (
      <>
        <Input onChange={handleSearch} value={inputValue} />

        <Button>find</Button>
        <Button onClick={handleFindedDelete}>x</Button>

        <Block>{output}</Block>
      </>
    );
  }
}
