import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all elements with correct data', () => {
    const currentPageData = [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        gender: 'male',
        birth_year: '19BBY',
      },
    ];
    const wrapper = shallow(<Card currentPageData={currentPageData} />);

    expect(wrapper.find('.card-name').text()).toBe('Luke Skywalker');
    expect(wrapper.find('.parameters-block').at(0).find('span').text()).toBe('172');
    expect(wrapper.find('.parameters-block').at(0).find('p').text()).toBe('height');
    expect(wrapper.find('.parameters-block').at(1).find('span').text()).toBe('77');
    expect(wrapper.find('.parameters-block').at(1).find('p').text()).toBe('mass');
    expect(wrapper.find('span').at(2).text()).toBe('male');
    expect(wrapper.find('span').at(2).prop('style')).toEqual({
      background: '#73D677',
    });
    expect(wrapper.find('span').at(3).text()).toBe('19BBY');
    expect(wrapper.find('span').at(3).prop('style')).toEqual({
      background: '#07D6F2',
    });
  });
});
