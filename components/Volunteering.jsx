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
import { format, parseISO } from "date-fns";

const Volunteering = () => {
  const { user } = useUser();
  const [volunteerings, setVolunteerings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteerings = async () => {
      if (!user) return;

      try {
        const response = await axios.get(`/api/volunteer?user=${user.id}`);
        setVolunteerings(response.data.volunteerings);
        console.log(response.data);
      } catch (error) {
        console.error(
          "Error fetching volunteerings:",
          error.response?.data?.msg || error.message
        );
        setError(error.response?.data?.msg || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteerings();
  }, [user]);

  console.log(volunteerings);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          My Volunteerings
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Volunteerings
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
        ) : volunteerings.length > 0 ? (
          <List>
            {volunteerings.map((volunteering) => (
              <ListItem key={volunteering._id}>
                <ListItemText
                  primary={volunteering.name}
                  secondary={`${format(
                    parseISO(volunteering.date),
                    "PPP"
                  )} at ${volunteering.time}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography align="center">No volunteerings found.</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Volunteering;
