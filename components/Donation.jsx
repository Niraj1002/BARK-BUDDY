"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Box,
  Paper,
  Divider,
} from "@mui/material";

const Donation = () => {
  const { user } = useUser();
  const [contri, setContri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContri = async () => {
      if (!user) return;

      try {
        const response = await axios.get(`/api/donate?user=${user.id}`);
        setContri(response.data.donations);
        console.log(response.data);
      } catch (error) {
        console.error(
          "Error fetching contri:",
          error.response?.data?.msg || error.message
        );
        setError(error.response?.data?.msg || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContri();
  }, [user]);

  console.log(contri);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          MY Donations
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Monetary Donations
        </Typography>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : contri.length > 0 ? (
          <List>
            {contri.map((donation) => (
              <ListItem key={donation._id}>
                <ListItemText
                  primary={donation.name}
                  secondary={`₹${donation.amount}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography align="center">No donations found.</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Donation;
