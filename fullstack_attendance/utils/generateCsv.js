function generateCsv(attendanceList) {
  // Sort attendance list by roll number (alphanumeric)
  attendanceList.sort((a, b) => a.rollNumber.localeCompare(b.rollNumber, undefined, { numeric: true }));

  let csv = "Roll Number,Name,Present\n";
  let absentees = 0;

  attendanceList.forEach(({ rollNumber, name, present }) => {
    if (!present) absentees++;
    csv += `${rollNumber},${name},${present ? 1 : 0}\n`;
  });

  csv += `,,Total Absentees: ${absentees}`;
  return csv;
}

module.exports = { generateCsv };
