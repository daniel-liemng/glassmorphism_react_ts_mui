import { makeStyles } from "@material-ui/core/styles";
import { Box, BoxProps } from "@material-ui/core";
import color from "color";
import clsx from "clsx";

const useStyles = (c: string, blur: number) =>
  makeStyles((theme) => ({
    glass: {
      // backgroundColor: "rgba(255,255,255,0.4)",
      backgroundColor: color(c).alpha(0.4).toString(),
      // backgroundImage:
      //   "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      backgroundImage: `linear-gradient(to bottom right, ${color(c)
        .alpha(0.2)
        .toString()}, ${color(c).alpha(0).toString()})`,
      // backdropFilter: "blur(7px)",
      backdropFilter: `blur(${blur}px)`,
      boxShadow: "10px 10px 10px rgba(30,30,30, 0.1)",
    },
    glassBorders: {
      borderLeft: `solid 1px ${color(c).alpha(0.3).toString()}`,
      borderTop: `solid 1px ${color(c).alpha(0.8).toString()}`,
    },
    glassRounded: {
      borderRadius: 20,
    },
  }));

export interface GlassCardProps extends BoxProps {
  color?: string;
  blur?: number;
  noBorders?: boolean;
  square?: boolean;
}

const GlassCard = (props: GlassCardProps) => {
  const {
    color = "#ffffff",
    blur = 7,
    noBorders = false,
    square = false,
    ...rest
  } = props;

  const classes = useStyles(color, blur)();

  return (
    <Box
      {...rest}
      className={clsx(classes.glass, {
        [classes.glassBorders]: !noBorders,
        [classes.glassRounded]: !square,
      })}
    />
  );
};

export default GlassCard;
