import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_177_1431}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/854beec5-0708-4ee9-a38b-5793e5c9b676"
          }}
          style={styles.ImageBackground_I177_1431_144_381}
        />
        <View style={styles.View_I177_1431_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cee282fc-71c2-4bc2-a746-2d6d31245666"
            }}
            style={styles.ImageBackground_I177_1431_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc5d42c8-a7ea-45d2-bbab-3b4397fab602"
            }}
            style={styles.ImageBackground_I177_1431_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84dbb633-0164-4136-b664-ea0c5b89b869"
            }}
            style={styles.ImageBackground_I177_1431_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee5e4a26-06e2-4049-93f9-890ceb3123bb"
          }}
          style={styles.ImageBackground_I177_1431_144_400}
        />
      </View>
      <View style={styles.View_177_1432}>
        <View style={styles.View_I177_1432_144_2324}>
          <Text style={styles.Text_I177_1432_144_2324}>New</Text>
        </View>
        <View style={styles.View_I177_1432_144_2323}>
          <Text style={styles.Text_I177_1432_144_2323}>Expenses</Text>
        </View>
        <View style={styles.View_I177_1432_144_2329}>
          <Text style={styles.Text_I177_1432_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_179_547}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3be79c3a-97b1-4772-a0d9-3bef8a456072"
          }}
          style={styles.ImageBackground_I179_547_179_54}
        />
        <View style={styles.View_I179_547_179_496}>
          <View style={styles.View_I179_547_179_397}>
            <View style={styles.View_I179_547_179_307}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7d559f5-1a26-4dd3-8d6b-95147d30ee90"
                }}
                style={styles.ImageBackground_I179_547_179_307_179_63}
              />
              <View style={styles.View_I179_547_179_307_179_348}>
                <Text style={styles.Text_I179_547_179_307_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_393}>
              <View style={styles.View_I179_547_179_393_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_398}>
            <View style={styles.View_I179_547_179_399}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/264805b6-1117-4c49-bc93-54fed3bf31a6"
                }}
                style={styles.ImageBackground_I179_547_179_399_179_63}
              />
              <View style={styles.View_I179_547_179_399_179_348}>
                <Text style={styles.Text_I179_547_179_399_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_400}>
              <View style={styles.View_I179_547_179_400_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_404}>
            <View style={styles.View_I179_547_179_405}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e1a6dba-9776-49b8-a249-92f8cc99bace"
                }}
                style={styles.ImageBackground_I179_547_179_405_179_63}
              />
              <View style={styles.View_I179_547_179_405_179_348}>
                <Text style={styles.Text_I179_547_179_405_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_406}>
              <View style={styles.View_I179_547_179_406_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_410}>
            <View style={styles.View_I179_547_179_411}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99978cc4-f09f-49b8-899f-504c6ee6318e"
                }}
                style={styles.ImageBackground_I179_547_179_411_179_63}
              />
              <View style={styles.View_I179_547_179_411_179_348}>
                <Text style={styles.Text_I179_547_179_411_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_412}>
              <View style={styles.View_I179_547_179_412_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_416}>
            <View style={styles.View_I179_547_179_417}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4abf483-975c-4e48-8753-a9ef56ef0808"
                }}
                style={styles.ImageBackground_I179_547_179_417_179_63}
              />
              <View style={styles.View_I179_547_179_417_179_348}>
                <Text style={styles.Text_I179_547_179_417_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_418}>
              <View style={styles.View_I179_547_179_418_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_422}>
            <View style={styles.View_I179_547_179_423}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b84209ba-77cd-4547-b339-02a5475d0757"
                }}
                style={styles.ImageBackground_I179_547_179_423_179_63}
              />
              <View style={styles.View_I179_547_179_423_179_348}>
                <Text style={styles.Text_I179_547_179_423_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_424}>
              <View style={styles.View_I179_547_179_424_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_428}>
            <View style={styles.View_I179_547_179_429}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d446d309-3aa1-49b0-9214-9ea83cd4eca5"
                }}
                style={styles.ImageBackground_I179_547_179_429_179_63}
              />
              <View style={styles.View_I179_547_179_429_179_348}>
                <Text style={styles.Text_I179_547_179_429_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_430}>
              <View style={styles.View_I179_547_179_430_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_440}>
            <View style={styles.View_I179_547_179_441}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73213f88-369b-43d5-939a-7d8f3b4106ca"
                }}
                style={styles.ImageBackground_I179_547_179_441_179_63}
              />
              <View style={styles.View_I179_547_179_441_179_348}>
                <Text style={styles.Text_I179_547_179_441_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_442}>
              <View style={styles.View_I179_547_179_442_179_58} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_179_661}>
        <View style={styles.View_179_598}>
          <Text style={styles.Text_179_598}>Expenses</Text>
        </View>
        <View style={styles.View_179_631}>
          <View style={styles.View_I179_631_179_605}>
            <Text style={styles.Text_I179_631_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_631_179_617}>
            <Text style={styles.Text_I179_631_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67177683-c29e-476d-afd4-c49fb67df8b1"
            }}
            style={styles.ImageBackground_I179_631_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bde03e4-48e4-4455-abc7-cbdcd2df1401"
            }}
            style={styles.ImageBackground_I179_631_179_608}
          />
        </View>
        <View style={styles.View_179_636}>
          <View style={styles.View_I179_636_179_605}>
            <Text style={styles.Text_I179_636_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_636_179_617}>
            <Text style={styles.Text_I179_636_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc3f5ec8-5034-4724-aa28-cd71724d1224"
            }}
            style={styles.ImageBackground_I179_636_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef5050d3-a5c3-44e4-b303-44eed00d912b"
            }}
            style={styles.ImageBackground_I179_636_179_608}
          />
        </View>
        <View style={styles.View_179_641}>
          <View style={styles.View_I179_641_179_605}>
            <Text style={styles.Text_I179_641_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_641_179_617}>
            <Text style={styles.Text_I179_641_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d85058fd-b04f-4604-8c6e-6fd294161c54"
            }}
            style={styles.ImageBackground_I179_641_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21ecfb4b-b455-4752-b3df-19d791afe09a"
            }}
            style={styles.ImageBackground_I179_641_179_608}
          />
        </View>
        <View style={styles.View_179_646}>
          <View style={styles.View_I179_646_179_605}>
            <Text style={styles.Text_I179_646_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_646_179_617}>
            <Text style={styles.Text_I179_646_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ac07da1-80b7-453f-ad78-1503f0aad03c"
            }}
            style={styles.ImageBackground_I179_646_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ef815aa-661c-4dba-a908-d1d3352a7bc5"
            }}
            style={styles.ImageBackground_I179_646_179_608}
          />
        </View>
        <View style={styles.View_179_651}>
          <View style={styles.View_I179_651_179_605}>
            <Text style={styles.Text_I179_651_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_651_179_617}>
            <Text style={styles.Text_I179_651_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21ca12ce-4e01-44dd-9b67-2f8daf2cbf13"
            }}
            style={styles.ImageBackground_I179_651_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05f522c7-dfa8-4982-8cd1-b504e5334d98"
            }}
            style={styles.ImageBackground_I179_651_179_608}
          />
        </View>
        <View style={styles.View_179_656}>
          <View style={styles.View_I179_656_179_605}>
            <Text style={styles.Text_I179_656_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_656_179_617}>
            <Text style={styles.Text_I179_656_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37d439e0-fc45-429e-b58b-b90fe3b6a1a8"
            }}
            style={styles.ImageBackground_I179_656_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d76fb857-2f5c-41fb-85d6-4461c47996d6"
            }}
            style={styles.ImageBackground_I179_656_179_608}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_177_1431: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I177_1431_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I177_1431_144_386: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I177_1431_144_387: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I177_1431_144_391: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I177_1431_144_395: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I177_1431_144_400: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_177_1432: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I177_1432_144_2324: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I177_1432_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I177_1432_144_2323: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1432_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I177_1432_144_2329: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I177_1432_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_547: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_54: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I179_547_179_496: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I179_547_179_397: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I179_547_179_307: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_307_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_307_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_307_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_393: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_393_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I179_547_179_398: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_I179_547_179_399: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_399_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_399_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_399_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_400: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_400_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)"
  },
  View_I179_547_179_404: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_I179_547_179_405: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_405_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_405_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_405_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_406: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_406_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I179_547_179_410: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_I179_547_179_411: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_411_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_411_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_411_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_412: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_412_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)"
  },
  View_I179_547_179_416: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%")
  },
  View_I179_547_179_417: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_417_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_417_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_417_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_418: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_418_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I179_547_179_422: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%")
  },
  View_I179_547_179_423: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_423_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_423_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_423_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_424: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_424_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)"
  },
  View_I179_547_179_428: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%")
  },
  View_I179_547_179_429: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_429_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_429_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_429_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_430: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_430_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I179_547_179_440: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%")
  },
  View_I179_547_179_441: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_441_179_63: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I179_547_179_441_179_348: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I179_547_179_441_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_442: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_442_179_58: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(75, 148, 96, 1)"
  },
  View_179_661: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%")
  },
  View_179_598: {
    flexGrow: 1,
    width: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_179_598: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_631: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_631_179_605: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_631_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_631_179_617: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_631_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_631_179_606: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_I179_631_179_608: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_636: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_636_179_605: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_636_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_636_179_617: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_636_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_636_179_606: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_I179_636_179_608: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_641: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_641_179_605: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_641_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_641_179_617: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_641_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_641_179_606: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_I179_641_179_608: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_646: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_646_179_605: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_646_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_646_179_617: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_646_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_646_179_606: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_I179_646_179_608: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_651: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_651_179_605: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_651_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_651_179_617: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_651_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_651_179_606: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_I179_651_179_608: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_656: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_656_179_605: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_656_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_656_179_617: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I179_656_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_656_179_606: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_I179_656_179_608: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
