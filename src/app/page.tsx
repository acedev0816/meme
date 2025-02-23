"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Typography,
  Stack,
  Container,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Stack
        spacing={4}
        alignItems="center"
        sx={{ textAlign: "center", py: 8 }}
      >
        {/* Token badge */}
        <Typography
          variant="button"
          sx={{
            color: "#00ff00",
            border: "2px solid #00ff00",
            padding: "8px 24px",
            borderRadius: "24px",
          }}
        >
          IMG
        </Typography>

        {/* Main title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: 60,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
          }}
        >
          Infinite Money Glitch
        </Typography>

        {/* Subtitle */}
        <Typography variant="h5" sx={{ mb: 4 }}>
          Earn Solana rewards every 5 minutes just by holding $IMG tokens
        </Typography>

        {/* Buttons row */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{ color: "white", borderColor: "white" }}
          >
            Buy Now
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", borderColor: "white" }}
          >
            <Icon icon="mdi:chart-box" />
            &nbsp;Chart
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", borderColor: "white" }}
          >
            <Icon icon="mdi:twitter" />
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", borderColor: "white" }}
          >
            <Icon icon="mdi:telegram" />
          </Button>
        </Stack>

        {/* Bottom section */}
        <Typography
          variant="h2"
          sx={{
            fontSize: 48,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            mb: "20px!important",
            mt: "80px!important",
          }}
        >
          Automatic Solana Rewards
        </Typography>

        <Typography variant="h6" sx={{ fontFamily: "monospace" }}>
          Every 5 minutes, holders receive Solana rewards automatically
          distributed to their wallets _
        </Typography>

        {/* Three column section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ mt: 8, width: "100%" }}
        >
          {/* How It Works */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#c2f0d3",
              },
            }}
            spacing={2}
          >
            <Typography
              variant="h4"
              sx={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
            >
              [How_It_Works]
            </Typography>
            <Stack spacing={2} sx={{ textAlign: "left" }}>
              <Typography>
                {">"} 5% tax is collected from every buy and sell transaction
              </Typography>
              <Typography>
                {">"} Tax is automatically converted to Solana
              </Typography>
              <Typography>
                {">"} Smart contract distributes Solana to all holders every 5
                minutes
              </Typography>
              <Typography>
                {">"} Rewards are proportional to your token holdings
              </Typography>
            </Stack>
          </Stack>

          {/* Benefits */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#c2f0d3",
              },
            }}
            spacing={2}
          >
            <Typography
              variant="h4"
              sx={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
            >
              [Benefits]
            </Typography>
            <Stack spacing={2} sx={{ textAlign: "left" }}>
              <Typography>
                {"[+]"} Earn passive income in Solana just by holding
              </Typography>
              <Typography>
                {"[+]"} No need to claim - rewards are automatic
              </Typography>
              <Typography>
                {"[+]"} Frequent 5-minute distribution cycles
              </Typography>
              <Typography>
                {"[+]"} Higher trading volume means more rewards
              </Typography>
            </Stack>
          </Stack>

          {/* Rewards Calculator */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#c2f0d3",
                "& .result": {
                  bgcolor: "#91e3ac",
                },
              },
            }}
            spacing={2}
          >
            <Typography
              variant="h4"
              sx={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
            >
              [Rewards_Calculator]
            </Typography>
            <Stack spacing={2} sx={{ fontFamily: "monospace" }}>
              <Typography textAlign="left">24h Volume (USD)</Typography>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label=""
              />
              <Typography
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>$0</span>
                <span>$100,000</span>
              </Typography>

              <Typography textAlign="left">Your $IMG Holdings</Typography>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label=""
              />

              <Stack direction="column" spacing={2} p={1} bgcolor="#ddd" className="result">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>Daily Rewards Pool:</Typography>
                  <Typography sx={{ color: "primary.dark" }}>$5,000</Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>Your Daily Earnings:</Typography>
                  <Typography sx={{ color: "primary.dark" }}>$5</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* Why Choose $IMG Section */}
        <Typography
          variant="h2"
          sx={{
            fontSize: 48,
            fontWeight: "bold",
            mt: "96px!important",
            mb: "20px!important",
          }}
        >
          Why Choose $IMG?
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ width: "100%" }}
        >
          {/* Tax Distribution */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#ddd",
              },
            }}
            spacing={2}
          >
            <Typography variant="h5" sx={{ mb: 1, textAlign: "left" }}>
              {">"}_
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              5% Tax Distribution
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              Every buy and sell transaction contributes to the reward pool
            </Typography>
          </Stack>

          {/* Auto-Claim System */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#ddd",
              },
            }}
            spacing={2}
          >
            <Typography variant="h5" sx={{ mb: 1, textAlign: "left" }}>
              [&nbsp;]
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              Auto-Claim System
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              Rewards are automatically distributed every 5 minutes
            </Typography>
          </Stack>

          {/* Solana Rewards */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#ddd",
              },
            }}
            spacing={2}
          >
            <Typography variant="h5" sx={{ mb: 1, textAlign: "left" }}>
              $_
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              Solana Rewards
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              Earn Solana just by holding $IMG tokens in your wallet
            </Typography>
          </Stack>

          {/* Fair Launch */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#ddd",
              },
            }}
            spacing={2}
          >
            <Typography variant="h5" sx={{ mb: 1, textAlign: "left" }}>
              //
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              Fair Launch
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              No pre-sale, no team tokens, 100% fair distribution
            </Typography>
          </Stack>
        </Stack>

        {/* Tokenomics Section */}
        <Typography
          variant="h2"
          sx={{
            fontSize: 48,
            fontWeight: "bold",
            mt: "96px!important",
            mb: "20px!important",
          }}
        >
          Tokenomics
        </Typography>

        {/* Stats Grid */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ width: "100%", mb: 4 }}
        >
          {/* Total Supply */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
            }}
            spacing={2}
          >
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              [ 1B ]
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
            >
              1,000,000,000
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              Total Supply
            </Typography>
          </Stack>

          {/* Initial Liquidity */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
            }}
            spacing={2}
          >
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              =====
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
            >
              100%
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              Initial Liquidity
            </Typography>
          </Stack>

          {/* Tax */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
            }}
            spacing={2}
          >
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              {"< 5% >"}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
            >
              5%
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              Tax
            </Typography>
          </Stack>

          {/* Fair Launch */}
          <Stack
            sx={{
              flex: 1,
              borderRadius: 2,
              p: 3,
              bgcolor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer",
            }}
            spacing={2}
          >
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              {">>"}100{"<<"}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
            >
              100%
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              Fair Launch
            </Typography>
          </Stack>
        </Stack>

        {/* True Fair Launch Box */}
        <Stack
          sx={{
            borderRadius: 2,
            p: 4,
            bgcolor: "#eee",
            border: "1px solid #aaa",
            cursor: "pointer",
            width: { xs: "100%", md: "80%" },
          }}
          spacing={2}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            True Fair Launch
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            100% of the total supply is added to liquidity at launch, with no
            team tokens, no presale, and no max wallet limits. The 5% tax on
            transactions is automatically distributed as Solana rewards to all
            holders every 5 minutes.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
