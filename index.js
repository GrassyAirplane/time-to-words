// ## Examples

// - '0:00' > 'midnight'
// - '12:00' > 'midday'


// - '2:00' > 'two o'clock'
// - '2:03' > 'three past two'
// - '2:11' > 'eleven past two'
// - '2:15' > 'quarter past two' 
// - '2:30' > 'half past two'
// - '2:33' > 'twenty seven to three'
// - '2:40' > 'twenty to three'
// - '2:45' > 'quarter to three' 
// - '2:55' > 'five to three'

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // map to consider cases for minutes 
  const minutes_map = {"00": "o'clock"};
  const hour_map = {"1": "one", "2": "two", "3": "three", 
                    "4": "four", "5": "five", "6": "six", 
                    "7": "seven", "8": "eight", "9": "nine",
                    "10": "ten", "11": "eleven", "12": "twelve",
                    
                    "20": "twenty", "40": "forty",
                    "50": "fifty", "00": "o'clock", 
                    
                    "15": "quarter"
                  };

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time == '12:00') {
    return 'midday';
  } 

  // Time splitting
  let [hour, minute] = time.split(":");

  
  if (minute == '00') {
    return `${hour_map[hour]} ${convertMinuteToWords(minute)}`
  } 
  // Quarter past
  else if (minute == '15') {
    return `${hour_map[minute]} past ${convertMinuteToWords(hour)}`
  }


  // Handle Hour
  if (minute > 30) {
    hour += 1;
  }

  // Handle minutes 
  // 1) map minutes to quarter, half, 
  // 2) timediff [past if <30, to if >30]

  

  // 60 - minutes
  // output => 


  return 'half past eight';
}

function convertMinuteToWords(minute) {
  let converted_minute = minute
  if (Number(minute) >= 16 && Number(minute) <=30) {
    converted_minute = Number(minute)
  }

  const hour_map = {
    "1": "one", 
    "2": "two", 
    "3": "three", 
    "4": "four", 
    "5": "five", 
    "6": "six", 
    "7": "seven", 
    "8": "eight", 
    "9": "nine",
    "10": "ten", 
    "11": "eleven", 
    "12": "twelve",
    "13": "thirteen", 
    "14": "fourteen", 
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    "40": "forty",
    "50": "fifty", 
    "00": "o'clock", 
    "15": "quarter"
  };

  return hour_map[converted_minute]
}

module.exports = { convertTimeToWords };