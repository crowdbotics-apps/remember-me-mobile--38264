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
      <View style={styles.View_197_260}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bfa0810-7f79-4adb-85ec-995b72bbedba"
          }}
          style={styles.ImageBackground_I197_260_144_381}
        />
        <View style={styles.View_I197_260_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/913fb812-0425-4561-a4d3-9c705e2d4826"
            }}
            style={styles.ImageBackground_I197_260_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef74b918-bbfa-4012-9771-ed21febb38d4"
            }}
            style={styles.ImageBackground_I197_260_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf5407af-a4f9-4201-80c8-00c149bb03fb"
            }}
            style={styles.ImageBackground_I197_260_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a0fd0fa-70d8-4987-a416-8fc6c687fbf6"
          }}
          style={styles.ImageBackground_I197_260_144_400}
        />
      </View>
      <View style={styles.View_197_261}>
        <View style={styles.View_I197_261_144_2323}>
          <Text style={styles.Text_I197_261_144_2323}>Compose</Text>
        </View>
        <View style={styles.View_I197_261_144_2329}>
          <Text style={styles.Text_I197_261_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_197_262}>
        <Text style={styles.Text_197_262}>Compose your message here...</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_197_263}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("197_111"))
        }
      >
        <View style={styles.View_I197_263_144_2127}>
          <Text style={styles.Text_I197_263_144_2127}>Send</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_197_264}>
        <View style={styles.View_I197_264_144_926}>
          <View style={styles.View_I197_264_144_927} />
        </View>
        <View style={styles.View_I197_264_144_928}>
          <View style={styles.View_I197_264_144_929} />
        </View>
        <View style={styles.View_I197_264_144_930}>
          <View style={styles.View_I197_264_144_931}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/662538b5-3105-4cf8-a315-13806642ee36"
              }}
              style={styles.ImageBackground_I197_264_144_932}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/271bf27b-3bc7-4434-be72-9d33fb3c3d01"
              }}
              style={styles.ImageBackground_I197_264_144_938}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5332542-25b7-4922-8560-bc911fc87028"
              }}
              style={styles.ImageBackground_I197_264_144_939}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/572f8ca6-c2ca-4978-ab18-e0f3a23abc13"
            }}
            style={styles.ImageBackground_I197_264_144_940}
          />
          <View style={styles.View_I197_264_144_947}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f3c0718-ec43-4a44-a759-3720243289b0"
              }}
              style={styles.ImageBackground_I197_264_144_948}
            />
            <View style={styles.View_I197_264_144_949}>
              <Text style={styles.Text_I197_264_144_949}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_950}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c99b5e59-6da5-4e31-b46c-7615d0b8de87"
              }}
              style={styles.ImageBackground_I197_264_144_951}
            />
            <View style={styles.View_I197_264_144_952}>
              <Text style={styles.Text_I197_264_144_952}>space</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_953}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8edd10a2-ae7d-4409-8953-44372e2d1b82"
              }}
              style={styles.ImageBackground_I197_264_144_954}
            />
            <View style={styles.View_I197_264_144_955}>
              <Text style={styles.Text_I197_264_144_955}>123</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_956}>
            <View style={styles.View_I197_264_144_957}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1ddfd95-b8dc-4828-92ae-d9d2b53e2d76"
                }}
                style={styles.ImageBackground_I197_264_144_958}
              />
              <View style={styles.View_I197_264_144_959}>
                <Text style={styles.Text_I197_264_144_959}> </Text>
              </View>
            </View>
            <View style={styles.View_I197_264_144_960}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcc5acc0-93be-4242-bf44-c2db1b7a4b22"
                }}
                style={styles.ImageBackground_I197_264_144_961}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c33a664b-fab3-4dc3-8cd2-e58fc918bf33"
                }}
                style={styles.ImageBackground_I197_264_144_964}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/625352d4-17a6-4b36-ab00-1622b4fc1bfd"
                }}
                style={styles.ImageBackground_I197_264_144_965}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d449357-f6d8-44cd-9963-6930d1049a3c"
                }}
                style={styles.ImageBackground_I197_264_144_966}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/249180a6-ba0f-4acb-bf15-2f0c5cfb37fc"
                }}
                style={styles.ImageBackground_I197_264_144_967}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa0d8453-84f4-4e25-b178-3ff5f419a24a"
                }}
                style={styles.ImageBackground_I197_264_144_968}
              />
            </View>
          </View>
          <View style={styles.View_I197_264_144_969}>
            <View style={styles.View_I197_264_144_970}>
              <View style={styles.View_I197_264_144_971} />
              <View style={styles.View_I197_264_144_972}>
                <Text style={styles.Text_I197_264_144_972}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb9935ec-9375-4f46-86a4-20d2d8153e64"
              }}
              style={styles.ImageBackground_I197_264_144_973}
            />
          </View>
          <View style={styles.View_I197_264_144_974}>
            <View style={styles.View_I197_264_144_975} />
            <View style={styles.View_I197_264_144_976}>
              <Text style={styles.Text_I197_264_144_976}>M</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_977}>
            <View style={styles.View_I197_264_144_978} />
            <View style={styles.View_I197_264_144_979}>
              <Text style={styles.Text_I197_264_144_979}>N</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_980}>
            <View style={styles.View_I197_264_144_981} />
            <View style={styles.View_I197_264_144_982}>
              <Text style={styles.Text_I197_264_144_982}>B</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_983}>
            <View style={styles.View_I197_264_144_984} />
            <View style={styles.View_I197_264_144_985}>
              <Text style={styles.Text_I197_264_144_985}>V</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_986}>
            <View style={styles.View_I197_264_144_987} />
            <View style={styles.View_I197_264_144_988}>
              <Text style={styles.Text_I197_264_144_988}>C</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_989}>
            <View style={styles.View_I197_264_144_990} />
            <View style={styles.View_I197_264_144_991}>
              <Text style={styles.Text_I197_264_144_991}>X</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_992}>
            <View style={styles.View_I197_264_144_993} />
            <View style={styles.View_I197_264_144_994}>
              <Text style={styles.Text_I197_264_144_994}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_995}>
            <View style={styles.View_I197_264_144_996} />
            <View style={styles.View_I197_264_144_997}>
              <Text style={styles.Text_I197_264_144_997}>L</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_998}>
            <View style={styles.View_I197_264_144_999} />
            <View style={styles.View_I197_264_144_1000}>
              <Text style={styles.Text_I197_264_144_1000}>K</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1001}>
            <View style={styles.View_I197_264_144_1002} />
            <View style={styles.View_I197_264_144_1003}>
              <Text style={styles.Text_I197_264_144_1003}>J</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1004}>
            <View style={styles.View_I197_264_144_1005} />
            <View style={styles.View_I197_264_144_1006}>
              <Text style={styles.Text_I197_264_144_1006}>H</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1007}>
            <View style={styles.View_I197_264_144_1008} />
            <View style={styles.View_I197_264_144_1009}>
              <Text style={styles.Text_I197_264_144_1009}>G</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1010}>
            <View style={styles.View_I197_264_144_1011} />
            <View style={styles.View_I197_264_144_1012}>
              <Text style={styles.Text_I197_264_144_1012}>F</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1013}>
            <View style={styles.View_I197_264_144_1014} />
            <View style={styles.View_I197_264_144_1015}>
              <Text style={styles.Text_I197_264_144_1015}>D</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1016}>
            <View style={styles.View_I197_264_144_1017} />
            <View style={styles.View_I197_264_144_1018}>
              <Text style={styles.Text_I197_264_144_1018}>S</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1019}>
            <View style={styles.View_I197_264_144_1020} />
            <View style={styles.View_I197_264_144_1021}>
              <Text style={styles.Text_I197_264_144_1021}>A</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1022}>
            <View style={styles.View_I197_264_144_1023} />
            <View style={styles.View_I197_264_144_1024}>
              <Text style={styles.Text_I197_264_144_1024}>P</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1025}>
            <View style={styles.View_I197_264_144_1026} />
            <View style={styles.View_I197_264_144_1027}>
              <Text style={styles.Text_I197_264_144_1027}>O</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1028}>
            <View style={styles.View_I197_264_144_1029} />
            <View style={styles.View_I197_264_144_1030}>
              <Text style={styles.Text_I197_264_144_1030}>I</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1031}>
            <View style={styles.View_I197_264_144_1032} />
            <View style={styles.View_I197_264_144_1033}>
              <Text style={styles.Text_I197_264_144_1033}>U</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1034}>
            <View style={styles.View_I197_264_144_1035} />
            <View style={styles.View_I197_264_144_1036}>
              <Text style={styles.Text_I197_264_144_1036}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1037}>
            <View style={styles.View_I197_264_144_1038} />
            <View style={styles.View_I197_264_144_1039}>
              <Text style={styles.Text_I197_264_144_1039}>T</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1040}>
            <View style={styles.View_I197_264_144_1041} />
            <View style={styles.View_I197_264_144_1042}>
              <Text style={styles.Text_I197_264_144_1042}>R</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1043}>
            <View style={styles.View_I197_264_144_1044} />
            <View style={styles.View_I197_264_144_1045}>
              <Text style={styles.Text_I197_264_144_1045}>E</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1046}>
            <View style={styles.View_I197_264_144_1047} />
            <View style={styles.View_I197_264_144_1048}>
              <Text style={styles.Text_I197_264_144_1048}>W</Text>
            </View>
          </View>
          <View style={styles.View_I197_264_144_1049}>
            <View style={styles.View_I197_264_144_1050} />
            <View style={styles.View_I197_264_144_1051}>
              <Text style={styles.Text_I197_264_144_1051}>Q</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_197_260: {
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
  ImageBackground_I197_260_144_381: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_260_144_386: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I197_260_144_387: {
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
  ImageBackground_I197_260_144_391: {
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
  ImageBackground_I197_260_144_395: {
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
  ImageBackground_I197_260_144_400: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  View_197_261: {
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
  View_I197_261_144_2323: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I197_261_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I197_261_144_2329: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_261_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_262: {
    width: wp("63%"),
    minWidth: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_197_262: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_197_263: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("62%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I197_263_144_2127: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I197_263_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_264: {
    width: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I197_264_144_926: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_927: {
    width: wp("100%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I197_264_144_928: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_929: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_930: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I197_264_144_931: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_I197_264_144_932: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I197_264_144_938: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I197_264_144_939: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I197_264_144_940: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I197_264_144_947: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I197_264_144_948: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_264_144_949: {
    flexGrow: 1,
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_949: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I197_264_144_950: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I197_264_144_951: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_264_144_952: {
    flexGrow: 1,
    width: wp("49%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_952: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I197_264_144_953: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I197_264_144_954: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_264_144_955: {
    flexGrow: 1,
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I197_264_144_956: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_I197_264_144_957: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I197_264_144_958: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_264_144_959: {
    flexGrow: 1,
    width: wp("11%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_959: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I197_264_144_960: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I197_264_144_961: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I197_264_144_964: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I197_264_144_965: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I197_264_144_966: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I197_264_144_967: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I197_264_144_968: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I197_264_144_969: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I197_264_144_970: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_971: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_972: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I197_264_144_973: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I197_264_144_974: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_975: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_976: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_976: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_977: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_978: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_979: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_979: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_980: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_981: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_982: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_983: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_984: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_985: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_985: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_986: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_987: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_988: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_988: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_989: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_990: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_991: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_991: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_992: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_993: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_994: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_994: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_995: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_996: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_997: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_997: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_998: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_999: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1000: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1000: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1001: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1002: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1003: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1003: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1004: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1005: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1006: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1006: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1007: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1008: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1009: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1009: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1010: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1011: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1012: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1012: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1013: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1014: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1015: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1015: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1016: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1017: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1018: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1018: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1019: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1020: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1021: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1021: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1022: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1023: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1024: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1024: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1025: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1026: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1027: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1027: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1028: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1029: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1030: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1030: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1031: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1032: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1033: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1034: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1035: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1036: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1037: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1038: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1039: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1040: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1041: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1042: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1042: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1043: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1044: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1045: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1046: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1047: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1048: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1048: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I197_264_144_1049: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_264_144_1050: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I197_264_144_1051: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_264_144_1051: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
