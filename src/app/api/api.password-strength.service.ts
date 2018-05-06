import {Injectable} from '@angular/core';

@Injectable()
export class ApiPasswordStrengthService {
  getStrength(value) {
    let letiationCount = 0;
    let score = 0;
    const letters = new Object();
    const letiations = {
      digits: /\d/.test(value),
      lower: /[a-z]/.test(value),
      upper: /[A-Z]/.test(value),
      nonWords: /\W/.test(value),
    };

    if (!value) {
      return score;
    }

    for (let i = 0; i < value.length; i++) {
      letters[value[i]] = (letters[value[i]] || 0) + 1;
      score += 9.0 / letters[value[i]];
    }

    for (const check in letiations) {
      letiationCount += (letiations[check] === true) ? 1 : 0;
    }

    score += (letiationCount - 1) * 5;

    if (letiationCount > 3 && value.length > 10) {
      score *= 2;
    }

    return Math.round(score / 10);
  }
}
