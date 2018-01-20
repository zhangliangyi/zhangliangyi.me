import React, {Component} from 'react';
import echarts from 'echarts';
import {SectionHeader} from 'Components';

export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        '#f44336',
        '#009688',
        '#FFC107',
        '#607D8B'
      ],
      childrenColors: [
        '#d32f2f',
        '#e53935',
        '#f44336',
        '#ef5350',
        '#e57373',
        '#ef9a9a',
        '#ffcdd2',
        '#26A69A',
        '#4DB6AC',
        '#80CBC4',
        '#B2DFDB',
        '#FFD54F',
        '#FFE082',
        '#FFECB3',
        '#78909C',
        '#90A4AE',
        '#B0BEC5',
        '#CFD8DC'
      ]
    };
  }

  render() {
    return (
      <div className="py-5">
        <SectionHeader header="skill"/>
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
          color: this.state.childrenColors,
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
