import { Box, BoxProps, LinkProps } from "@chakra-ui/react";

type NavTextProps = {
  children: React.ReactNode;
  href?: string;
  profile?: boolean;
  onClick?: () => void;
} & Partial<BoxProps> &
  Partial<LinkProps>;

export const NavText = ({
  children,
  onClick,
  profile,
  ...others
}: NavTextProps) => (
  <Box
    as="a"
    d="flex"
    mr={[0, 3]}
    px={profile ? [0, 0] : [0, 3]}
    my={[2, 0]}
    textStyle="a"
    onClick={onClick}
    alignItems="center"
    _hover={{ color: "Green.500" }}
    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
    {...others}
  >
    {children}
  </Box>
);
