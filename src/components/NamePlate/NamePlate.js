import React, {Component} from 'react';

function getAge(birthday) {
  const year = birthday.slice(0, 4);
  const month = birthday.slice(4, 6);
  const day = birthday.slice(-2);
  const now = new Date();

  if (now.getMonth() + 1 > month) {
    return now.getFullYear() - year;
  }

  if (now.getMonth() + 1 === month && now.getDate() >= day) {
    return now.getFullYear() - year;
  }

  return now.getFullYear() - year - 1;
}

function getExpPercent(birthday) {
  const birthdayMonth = birthday.slice(4, 6);
  const birthdayDate = birthday.slice(-2);
  const now = new Date();
  let lastBirthday = 0, nextBirthday = 0;

  if (now.getMonth() + 1 > birthdayMonth || (now.getMonth() + 1 === birthdayMonth && now.getDate() > birthdayDate)) {
    lastBirthday = new Date(now.getFullYear(), birthdayMonth - 1, birthdayDate).getTime();
    nextBirthday = new Date(now.getFullYear() + 1, birthdayMonth - 1, birthdayDate).getTime();

  }

  if (now.getMonth() + 1 < birthdayMonth || (now.getMonth() + 1 === birthdayMonth && now.getDate() < birthdayDate)) {
    lastBirthday = new Date(now.getFullYear() - 1, birthdayMonth - 1, birthdayDate).getTime();
    nextBirthday = new Date(now.getFullYear(), birthdayMonth - 1, birthdayDate).getTime();

  }

  return Math.round(((now.getTime() - lastBirthday) * 100) / (nextBirthday - lastBirthday));
}

function getExpWidth(birthday) {
  return {
    width: getExpPercent(birthday) + '%'
  }
}

export default class NamePlate extends Component {
  render() {
    return (
      <div className="SAONamePlate row">
        <div className="col-6">
          <h2 className="SAOName py-3 px-2">
            <span className="oi oi-person SAOIcon" data-glyph="person"/>
            {this.props.name}
          </h2>
        </div>

        <div className="col-6 d-flex flex-column">
          <div className="d-flex flex-row align-items-center mb-1">
            <div className="text-right SAONamePlateLabel">LV</div>
            <div className="SAONamePlateValue ml-1">{getAge(this.props.birthday)}</div>
          </div>

          <div className="d-flex flex-row align-items-center mb-1">
            <div className="text-right SAONamePlateLabel">HP</div>
            <div className="progress w-100 SAONamePlateValue ml-1">
              <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100"
                   aria-valuemin="0"
                   aria-valuemax="100">
                {this.props.birthday.slice(-6) + '/' + this.props.birthday.slice(-6)}
              </div>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center">
            <div className="text-right SAONamePlateLabel">EXP</div>
            <div className="progress w-100 SAONamePlateValue ml-1">
              <div className="progress-bar" role="progressbar"
                   style={getExpWidth(this.props.birthday)}
                   aria-valuenow={getExpPercent(this.props.birthday)}
                   aria-valuemin="0"
                   aria-valuemax="100"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
