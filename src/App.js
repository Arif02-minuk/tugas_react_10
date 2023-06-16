import React,{Component} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Button,
  Divider,
  Flag,
  Image,
  Header,
  Icon,
  Input,
  Label,
  Container,
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <>
        <Divider></Divider>
        <Grid container>
          <Grid.Column width={3}>
            <Flag name="id" />
            <Icon name="angle left" />
            <Icon name="angle right" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Input fluid placeholder="Search..." icon={<Icon name="star" />} />
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h3">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
              Patrick
            </Header>
          </Grid.Column>
        </Grid>
        <Divider horizontal>SELAMAT DATANG!!!</Divider>
        <Grid>
          <Grid.Column width={12}></Grid.Column>
          <Grid.Column width={4}>
            <Label as="a" color="teal" tag align="right">
              SPORT
            </Label>
          </Grid.Column>
        </Grid>
        <br />
        <Container textAlign="center">
          <p>
            Ducati tengah menunggu sidang Pengadilan Banding FIM tentang
            komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah
            Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase
            Olahraga)?Suzuki,Hond,KTM dan Aprilia memprotes penggunaan komponen
            aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam
            balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada
            prosesnya,Dovizioso tampil sebagai pemenang usai mengalahkan Marc
            Marquez. Keempat tim menyakini, komponen itu memiliki fungsi
            aerodinamis, dan menghasilkan downforce, yang membantu motor melesat
            ditrek. Sementara Ducati bersikukuh komponen itu cuma untuk
            mendinginkan ban dan sudah disetujui TEchnical Director sebelum
            balapan.Pada awalnya, protes keempat tim itu ditolak oleh steward
            MotoGp sehingga dibawa ke pengadilan banding FIM. sidang itu sendiri
            akan dilaksanakan sebelum seri kedua di Argentina digelar pada 29-31
            Maret mendatang. Manajer umum Ducati Gigi Dall'igna berkukuh tidak
            ada yang ilegal dengan komponen itu. Namun,seandainya pengadilan
            mengabulkan gugatan tersebut Ducati akan mempertimbangkan
            melanjutkan kasus ini ke CAS."dalam federasi,derajat berakhir di
            pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah
            pengadilan olahraga tapi dialam kasus ini Anda keluar dari perimeter
            FIM", Dall'igna mengungkapkan kepada MotorGP.com."Saya bahkan tifak
            akan memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak
            melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan
            mengapa pengadilan banding bisa memutuskan secara berbeda."
          </p>
          <Button
            content="Tambahkan Tautan Ke List"
            icon="add"
            labelPosition="left"
            color="teal"
          />
        </Container>
      </>
    );
  }
}

export default App;
