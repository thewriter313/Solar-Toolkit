import React from 'react';
import { Page, Image, Font, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Logo from "../Assets/homelogo.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: "#fff",
  },
  section: {
    fontFamily: 'Courier',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 10,
  },
  heading: {
    fontFamily: 'Courier',
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
  },
  text: {
    lineHeight: 1.5,
    fontSize: 12,
  },
  subheading: {
    fontFamily: 'Courier-Bold',
    fontSize: 14,
    lineHeight: 2,
    textTransform: 'uppercase',
    marginTop: 5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableHead: {
    flexDirection: 'row',
    margin: 'auto',
    backgroundColor: '#00bf8c',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    padding:5,
    width: '20%',
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableHeadCell: {
    fontSize: 12,
    fontFamily: 'Courier-Bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  tableCell: {
    fontSize: 12,
    margin: 'auto',
    marginTop: 5,
  },
});


Font.registerHyphenationCallback(word => {
  // Return entire word as unique part
  return [word];
});

const today = new Date();
const formattedDate = today.toLocaleDateString();

// Create Document Component
const PDFFile = (
  {
    contactDetails,
    singlePanelvoltage,
    singlePanelWatt,
    panelNumbersUpdated,
    batteryVoltageValue,
    batteryCapacity,
    batteryNumbers,
    systemVoltage,
    inverterWattage,
    chargeControllerSize,
  }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View>
          <Image src={Logo} style={{maxWidth: 200, maxHeight: 200, marginBottom: 20}} />
          <Text style={styles.subheading}>Address :</Text>
          <Text style={styles.text}>University of Nairobi</Text>
          <Text style={styles.text}>Harry Thuku Rd, Nairobi, Kenya</Text>
          <Text style={styles.text}>Phone: +254732328021</Text>
          <Text style={styles.subheading}>To :</Text>
          <Text style={styles.text} render={() => (
            `${contactDetails.fullname}`
          )} fixed ></Text>
          <Text style={styles.text} render={() => (
            `${contactDetails.county + ', ' + contactDetails.country}`
          )} ></Text>
          <Text style={styles.text} render={() => (
            `${contactDetails.email}`
          )} ></Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={[styles.heading, {marginBottom:30}]}>Quotation</Text>
          <Text render={() => (`${'Date: ' + formattedDate}`)} style={styles.text}></Text>
          <Text style={styles.text}>Quote No.:  2432</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.table}>
            <View style={styles.tableHead}>
              <View style={styles.tableCol}><Text style={styles.tableHeadCell}>Items</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableHeadCell}>Specification</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableHeadCell}>Unit Price</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableHeadCell}>Quantity</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableHeadCell}>Total</Text></View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Solar Panel</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell} render={()=> (`${singlePanelvoltage + ' V, ' + singlePanelWatt + ' W'}` )}></Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 2,000</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell} render={()=> (`${panelNumbersUpdated}`)}></Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 4,000</Text></View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Battery</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell} render={()=> (`${batteryVoltageValue + ' V, ' + batteryCapacity + ' Ah'}` )}></Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 10,000</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell} render={()=> (`${batteryNumbers}`)}></Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 10,000</Text></View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Inverter</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell} render={()=> (`${systemVoltage + ' V, ' + inverterWattage + ' W'}` )}></Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 10,000</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>1</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 10,000</Text></View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}><Text style={styles.tableCell} hyphenation='false'>Charge Controller</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell} render={()=> (`${systemVoltage + ' V, ' + chargeControllerSize + ' A'}` )}></Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 10,000</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>1</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>Ksh 10,000</Text></View>
            </View>
        </View>
      </View>
      <View style={[styles.section, {justifyContent:'flex-end'}]}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, {width:'50%'}]}><Text style={styles.tableHeadCell}>Sub Total</Text></View>
            <View style={[styles.tableCol, {width:'50%'}]}><Text style={[styles.tableCell, {fontFamily: 'Courier-Bold'}]}>Ksh 300000</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, {width:'50%'}]}><Text style={styles.tableHeadCell}>Tax 15%</Text></View>
            <View style={[styles.tableCol, {width:'50%'}]}><Text style={[styles.tableCell, {fontFamily: 'Courier-Bold'}]}>Ksh 2000</Text></View>
          </View>
          <View style={[styles.tableRow, {backgroundColor: '#000000', color: '#ffffff'}]}>
            <View style={[styles.tableCol, {width:'50%', borderRight:'1px solid #ffffff'}]}><Text style={styles.tableHeadCell}>Grand Total</Text></View>
            <View style={[styles.tableCol, {width:'50%'}]}><Text style={[styles.tableCell, {fontFamily: 'Courier-Bold'}]}>Ksh 302000</Text></View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.subheading}>Note</Text>
          <Text style={styles.text}>Please note that this software is an estimation tool and for more detailed information, please consult with your engineer.</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={{flexDirection: 'column', alignItems:'center', width:'100%'}}>
        <Text style={styles.text}>For any questions please contact Customer Support PH: +254-732-328021</Text>
        <Text style={styles.tableHeadCell}> Thank You for using HelEOS</Text>
        </View>
      </View>
    </Page>
  </Document>
);


export default PDFFile;