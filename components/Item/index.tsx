import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import styles from "./Item.module.css";
import Image from "next/image";

export const Item = ({ item }: any) => {
  const strDate = new Date(item.created_at);

  const dateConverted =
    strDate.toLocaleString("default", { month: "long" }).slice(0, 3) +
    " " +
    strDate.toISOString().substring(8, 10);

  return (
    <>
      <Divider />
      <div className={styles.container}>
        <div className={styles.form}>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 48, height: 48 }}
            src={item?.entities?.urls ? item?.entities?.urls[0]?.images : ""}
          />
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <Box sx={{ mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    {item?.entities?.mentions && item?.entities?.mentions[1]
                      ? item?.entities?.mentions[1]?.username
                      : ""}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color={"#536471"}
                    sx={{ mx: 1 }}
                  >
                    {item?.entities?.mentions
                      ? "@" + item?.entities?.mentions[0]?.username
                      : ""}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color={"#536471"}
                    marginRight={"3px"}
                  >
                    .
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    color={"#536471"}
                  >
                    {dateConverted || ""}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                color="text.secondary"
                variant="body2"
                marginTop={"-7px"}
              >
                {styles.description}
              </Typography>
            </Box>
            <Box sx={{ mx: 2, minWidth: 450, maxWidth: 480 }}>
              <Typography gutterBottom variant="body1">
                {item?.text}
              </Typography>
            </Box>
            {item?.entities?.urls &&
            item?.entities?.urls?.length > 0 &&
            item?.entities?.urls[0]?.images?.length > 0 ? (
              <Box sx={{ mx: 2 }} marginTop="12px">
                <Image
                  src={item?.entities?.urls[0]?.images[0]?.url}
                  alt={`pic ${item?.id}`}
                  width={500}
                  height={480}
                  style={{ borderRadius: "16px" }}
                  unoptimized={true}
                />
              </Box>
            ) : null}
          </Box>
        </div>
      </div>
      <Divider />
    </>
  );
};
