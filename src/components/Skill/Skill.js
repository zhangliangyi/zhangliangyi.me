import React, {Component} from 'react';
import echarts from 'echarts';
import {SectionHeader} from 'Components';

export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        '#d87c7c',
        '#919e8b',
        '#d7ab82',
        '#6e7074',
        '#61a0a8',
        '#efa18d',
        '#787464',
        '#cc7e63',
        '#724e58',
        '#4b565b'
      ]
    };
  }

  render() {
    return (
      <div className="mt-4 py-4">
        <SectionHeader header="skill" icon="shield"/>
        <div className="skill-chart-container position-relative">
          <div className="skill-chart" ref={el => this.pieElement = el}/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this._renderPieChart();
  }

  _renderPieChart() {
    echarts.init(this.pieElement).setOption({
      series: [
        {
          name: 'category',
          type: 'pie',
          radius: [0, '35%'],
          center: ['50%', '50%'],
          color: this.state.colors,
          label: {
            normal: {
              position: 'inner',
              fontFamily: 'Titillium Web'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.props.skills.map(skill => ({value: skill.value, name: skill.name.toUpperCase()})),
        },
        {
          name: 'skill',
          type:'pie',
          radius: ['45%', '60%'],
          color: this.state.colors,
          label: {
            normal: {
              fontFamily: 'Titillium Web'
            }
          },
          data: this._flattenSkills(this.props.skills)
        }
      ]
    });
  }

  _flattenSkills(skills) {
    let flattenSkills = [];
    for (let category of skills) {
      for (let skill of category.items) {
        flattenSkills.push({
          name: skill.name,
          value: skill.value
        });
      }
    }

    return flattenSkills;
  }
}
